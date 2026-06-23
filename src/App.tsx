import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'
import VisitDetails from './pages/VisitDetails'
import PreCheckIn from './pages/PreCheckIn'
import TemporaryGuestPreCheckIn from './pages/TemporaryGuestPreCheckIn'
import AdminRegistration from './pages/AdminRegistration'
import Invitation from './pages/Invitation'
import Companions from './pages/Companions'
import Validation from './pages/Validation'
import DownloadApp from './pages/DownloadApp'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/invitacion" replace />} />
      <Route path="/invitacion" element={<Invitation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="/visit-details" element={<VisitDetails />} />
      <Route path="/pre-check-in" element={<PreCheckIn />} />
      <Route path="/companions" element={<Companions />} />
      <Route path="/validation" element={<Validation />} />
      <Route path="/download-app" element={<DownloadApp />} />
      <Route path="/temporary-guest-pre-check-in" element={<TemporaryGuestPreCheckIn />} />
      <Route path="/admin-registration" element={<AdminRegistration />} />
      <Route path="*" element={<Navigate to="/invitacion" replace />} />
    </Routes>
  )
}
