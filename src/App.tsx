
import './App.css'
import { Button, Input } from "antd";
import ThemeProvider from './providers/theme-provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import HomePage from './pages/private/home';
import PublicLayout from './layout/public-layout';
import PrivateLayout from './layout/private-layout';
import CampaignsPage from './pages/private/admin/campaigns';
import CampaignForm from './pages/private/admin/campaigns/campaign-form';
import CampaignInfoPage from './pages/private/campaign-info';
import DonationsPage from './pages/private/user/donations';
import ProfilePage from './pages/private/user/profile';
import ReportsPage from './pages/private/user/reports';
import AdminDonationsPage from './pages/private/admin/donations';
import AdminReportsPage from './pages/private/admin/reports';
import UsersList from './pages/private/admin/users';


function App() {

  return (<ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={
          <PublicLayout>
            <LoginPage />
          </PublicLayout>
        } />
        <Route path="/Register" element={
          <PublicLayout>
            <RegisterPage />
          </PublicLayout>
        } />
        <Route path="/" element={
          <PrivateLayout>
            <HomePage />
          </PrivateLayout>
        } />
        <Route
          path="/campaign/:id" element={
            <PrivateLayout>
              <CampaignInfoPage />
            </PrivateLayout>
          }
        />
        <Route path="/admin/campaigns" element={
          <PrivateLayout>
            <CampaignsPage />
          </PrivateLayout>
        } />
        <Route path='/admin/campaigns/create' element={
          <PrivateLayout>
            <CampaignForm />
          </PrivateLayout>
        }
        />
        <Route
          path="/admin/campaigns/edit/:id"
          element={
            <PrivateLayout>
              <CampaignForm />
            </PrivateLayout>
          }
          
        />
        <Route
            path="/user/donations"
            element={
              <PrivateLayout>
                <DonationsPage />
              </PrivateLayout>
            }
          />

          <Route
            path="/user/profile"
            element={
              <PrivateLayout>
                <ProfilePage />
              </PrivateLayout>
            }
          />

          <Route
            path="/user/reports"
            element={
              <PrivateLayout>
                <ReportsPage />
              </PrivateLayout>
            }
          />

          <Route
            path="/admin/donations"
            element={
              <PrivateLayout>
                <AdminDonationsPage />
              </PrivateLayout>
            }
          />

          <Route
            path="/admin/reports"
            element={
              <PrivateLayout>
                <AdminReportsPage />
              </PrivateLayout>
            }
          />

          <Route
            path="/admin/users"
            element={
              <PrivateLayout>
                <UsersList />
              </PrivateLayout>
            }
          />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App;
