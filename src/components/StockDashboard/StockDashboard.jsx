import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './StockDashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockDashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['9:15', '10:00', '10:45', '11:30', '12:15', '13:00', '13:45', '14:30', '15:15'],
    datasets: [
      {
        label: 'Price',
        data: [51750, 51800, 51700, 51850, 51730, 51780, 51810, 51760, 51820],
        borderColor: '#FF0000',
        backgroundColor: 'rgba(255,0,0,0.1)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['HDFC', 'ICICI', 'KOTAK', 'SBIN', 'AXIS', 'RELIANCE', 'INFY'],
    datasets: [
      {
        label: 'Volume',
        data: [120, 190, 30, 50, 20, 300, 230],
        backgroundColor: 'rgba(0,255,0,0.6)',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="header">
        <div className="market-info">
          <div className="index">Nifty: 24477</div>
          <div className="index">Banknifty: 51758</div>
          <div className="index">Finnifty: 23302</div>
          <div className="index">Midcap: 12365</div>
        </div>
        <div className="header-right">
          <button className="header-button">CLEAR</button>
          <button className="header-button">FIBBO LEVEL</button>
          <button className="header-button">UTO LEVEL</button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="content">
        {/* Left Panel */}
        <div className="left-panel">
          <div className="symbol-list">
            <div className="symbol">HDFC</div>
            <div className="symbol">ICICI</div>
            <div className="symbol">KOTAK</div>
            <div className="symbol">SBIN</div>
            <div className="symbol">AXIS</div>
            <div className="symbol">RELIANCE</div>
            <div className="symbol">INFY</div>
          </div>
          <div className="bar-chart">
            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="line-chart">
            <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
          </div>
          
          {/* New Order Panel Section */}
          <div className="order-section">
            <div className="order-panel">
              <div className="order-section-left">
                <div className="order-details">
                  <div className="order-row">
                    <span>MARKET</span>
                    <span>QTY</span>
                    <span>LTP</span>
                    <span>CE</span>
                  </div>
                  <div className="order-row">
                    <span>X</span>
                    <span>105</span>
                    <span>238.00</span>
                    <span>51700</span>
                  </div>
                  <div className="order-action-row">
                    <button className="standby-button">STANDBY</button>
                    <button className="buy-ce-button">Buy CE</button>
                    <button className="cancel-button">Cancel/Exit CE-PE</button>
                    <button className="buy-pe-button">Buy PE</button>
                    <button className="standby-button">STANDBY</button>
                  </div>
                </div>
                <div className="order-info">
                  <div className="order-row">
                    <span>NET QTY</span>
                    <span>BUY PRICE</span>
                    <span>STOPLOSS</span>
                    <span>TARGET</span>
                  </div>
                  <div className="order-row">
                    <span>Req Margin</span>
                    <span>24990</span>
                    <span>Profit/Loss</span>
                    <span>0.00</span>
                  </div>
                </div>
              </div>
              <div className="order-section-right">
                <div className="order-row">
                  <span>TARGET</span>
                  <span>STOPLOSS</span>
                  <span>BUY PRICE</span>
                  <span>NET QTY</span>
                </div>
                <div className="order-row">
                  <span>Profit/Loss</span>
                  <span>23195</span>
                  <span>0.00</span>
                  <span>Req Margin</span>
                </div>
                <div className="algo-section">
                  <div className="algo-switch">
                    <span>MARGIN</span>
                    <span>SL</span>
                    <span>TARGET</span>
                    <span>TRAILING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer-left">
          <button className="footer-button">MARKET</button>
          <button className="footer-button">QTY</button>
          <button className="footer-button">PRICE</button>
        </div>
        <div className="footer-right">
          <div className="info-box">
            <span className="info-label">STRENGTH</span>
            <span className="info-value">WEAK</span>
          </div>
          <div className="info-box">
            <span className="info-label">MOMENTUM</span>
            <span className="info-value">OVER SOLD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;
