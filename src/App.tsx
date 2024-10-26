import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Clients from './pages/Clients';
import Finance from './pages/Finance';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';
import Business from './pages/Business';
import Coupons from './pages/Coupons';
import Affiliate from './pages/Affiliate';

// Appointment subroutes
import AppointmentList from './pages/appointments/AppointmentList';
import AppointmentCalendar from './pages/appointments/AppointmentCalendar';
import DailyView from './pages/appointments/DailyView';
import OpenShift from './pages/appointments/OpenShift';
import CashClosing from './pages/appointments/CashClosing';
import CloseShift from './pages/appointments/CloseShift';
import ClientPortal from './pages/appointments/ClientPortal';

// Finance subroutes
import FinanceDashboard from './pages/finance/FinanceDashboard';
import SalesSearch from './pages/finance/sales/SalesSearch';
import SalesRegister from './pages/finance/sales/SalesRegister';
import SalesPOS from './pages/finance/sales/SalesPOS';
import Payments from './pages/finance/Payments';
import OtherIncome from './pages/finance/OtherIncome';
import Expenses from './pages/finance/Expenses';
import Accounting from './pages/finance/Accounting';
import PaymentMethods from './pages/finance/PaymentMethods';
import PaymentPromises from './pages/finance/PaymentPromises';

// Inventory subroutes
import Search from './pages/inventory/Search';
import Services from './pages/inventory/Services';
import Products from './pages/inventory/Products';
import Categories from './pages/inventory/Categories';
import Suppliers from './pages/inventory/Suppliers';
import Branches from './pages/inventory/Branches';
import Warehouse from './pages/inventory/Warehouse';
import PurchaseOrders from './pages/inventory/PurchaseOrders';
import ReceptionOrders from './pages/inventory/ReceptionOrders';
import Attributes from './pages/inventory/settings/Attributes';
import StaffItems from './pages/inventory/settings/StaffItems';
import MovementHistory from './pages/inventory/MovementHistory';

// Client subroutes
import ClientProducts from './pages/clients/ClientProducts';
import ClientList from './pages/clients/ClientList';
import ClientTags from './pages/clients/ClientTags';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />}>
            <Route index element={<Navigate to="list" replace />} />
            <Route path="list" element={<AppointmentList />} />
            <Route path="calendar" element={<AppointmentCalendar />} />
            <Route path="daily" element={<DailyView />} />
            <Route path="open-shift" element={<OpenShift />} />
            <Route path="cash-closing" element={<CashClosing />} />
            <Route path="close-shift" element={<CloseShift />} />
            <Route path="client-portal" element={<ClientPortal />} />
          </Route>
          <Route path="clients" element={<Clients />}>
            <Route index element={<Navigate to="list" replace />} />
            <Route path="products" element={<ClientProducts />} />
            <Route path="list" element={<ClientList />} />
            <Route path="tags" element={<ClientTags />} />
          </Route>
          <Route path="finance" element={<Finance />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FinanceDashboard />} />
            <Route path="sales/search" element={<SalesSearch />} />
            <Route path="sales/register" element={<SalesRegister />} />
            <Route path="sales/pos" element={<SalesPOS />} />
            <Route path="payments" element={<Payments />} />
            <Route path="other-income" element={<OtherIncome />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="accounting" element={<Accounting />} />
            <Route path="payment-methods" element={<PaymentMethods />} />
            <Route path="payment-promises" element={<PaymentPromises />} />
          </Route>
          <Route path="inventory" element={<Inventory />}>
            <Route index element={<Navigate to="search" replace />} />
            <Route path="search" element={<Search />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="branches" element={<Branches />} />
            <Route path="warehouse" element={<Warehouse />} />
            <Route path="purchase-orders" element={<PurchaseOrders />} />
            <Route path="reception-orders" element={<ReceptionOrders />} />
            <Route path="settings/attributes" element={<Attributes />} />
            <Route path="settings/staff-items" element={<StaffItems />} />
            <Route path="movement-history" element={<MovementHistory />} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="business" element={<Business />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="affiliate" element={<Affiliate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;