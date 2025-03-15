
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
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App;
