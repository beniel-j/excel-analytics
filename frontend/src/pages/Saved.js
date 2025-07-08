import React, { useEffect, useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import './../styles.css';

const Saved = () => {
  const [savedCharts, setSavedCharts] = useState([]);
  const chartRefs = useRef([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('savedCharts') || '[]');
    setSavedCharts(data);
  }, []);

    const deleteChart = (index) => {
    const confirmDelete = window.confirm("⚠️ Are you sure you want to delete this chart? This action cannot be undone.");
    if (!confirmDelete) return;

    const updatedCharts = [...savedCharts];
    updatedCharts.splice(index, 1);
    setSavedCharts(updatedCharts);
    localStorage.setItem('savedCharts', JSON.stringify(updatedCharts));
    };

  const exportAs = async (index, type) => {
    const node = chartRefs.current[index];
    if (!node) return;

    const dataUrl = await toPng(node);
    if (type === 'png' || type === 'jpg') {
      const link = document.createElement('a');
      link.download = `chart-${index}.${type}`;
      link.href = dataUrl;
      link.click();
    } else if (type === 'pdf') {
      const pdf = new jsPDF();
      pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 100);
      pdf.save(`chart-${index}.pdf`);
    }
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <h2>📁 Saved Analysis</h2>

        {savedCharts.length === 0 ? (
          <p>No saved charts yet. Go to Upload and create one!</p>
        ) : (
          savedCharts.map((chart, index) => {
            const chartData = {
              labels: chart.data.map(row => row[chart.xColumn]),
              datasets: [{
                label: `${chart.yColumn} vs ${chart.xColumn}`,
                data: chart.data.map(row => row[chart.yColumn]),
                backgroundColor: '#3282B8'
              }]
            };

            return (
              <div key={index} className="chart-card">
                <div ref={(el) => (chartRefs.current[index] = el)}>
                  {chart.chartType === 'bar' && <Bar data={chartData} />}
                  {chart.chartType === 'line' && <Line data={chartData} />}
                  {chart.chartType === 'pie' && <Pie data={chartData} />}
                </div>
                <h4>{chart.title}</h4>
                <p><em>Created at: {chart.timestamp}</em></p>
                <div className="export-buttons">
                <button onClick={() => exportAs(index, 'png')}>📸 Export PNG</button>
                <button onClick={() => exportAs(index, 'jpg')}>🖼️ Export JPG</button>
                <button onClick={() => exportAs(index, 'pdf')}>📄 Export PDF</button>
                </div>

                <button onClick={() => deleteChart(index)} className="delete-btn">
                🗑️ Delete
                </button>

              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Saved;
