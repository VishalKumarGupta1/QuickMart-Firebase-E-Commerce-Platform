import React from "react";
import { FaUserTie } from "react-icons/fa";
import Layout from "../../../components/layout/Layout";
import "./dashboard.css"; // Import the external CSS
import Dashboardtab from "./Dashboardtab.jsx";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <section className="dashboard-section">
          <div className="dashboard-container">
            <div className="dashboard-grid">
              {[
                { title: "Total Products", value: 10 },
                { title: "Total Orders", value: 10 },
                { title: "Total Users", value: 20 },
                { title: "Total Products", value: 20 },
              ].map((item, index) => (
                <div className="dashboard-card" key={index}>
                  <div className="dashboard-icon">
                    <FaUserTie size={50} />
                  </div>
                  <h2 className="dashboard-value">{item.value}</h2>
                  <p className="dashboard-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <Dashboardtab />
        </section>
      </Layout>
    </div>
  );
};

export default Dashboard;
