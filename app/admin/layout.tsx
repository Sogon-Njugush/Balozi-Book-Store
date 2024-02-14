import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "BALOZI BOOK STORE",
  description: "BALOZI BOOK STORE Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
