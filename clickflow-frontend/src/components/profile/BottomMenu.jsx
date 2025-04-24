import {
  FileText,
  MessageCircle,
  Wallet2,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";

function MenuItem({ icon: Icon, label, href }) {
  return (
    <Link
      to={href}
      className="flex items-center justify-between bg-[#121e3a] p-4 hover:bg-darkbg100 transition-colors duration-200"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-medium">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-white" />
    </Link>
  );
}

export default function BottomMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <div className="divide-y">
        <MenuItem icon={FileText} label="Transactions" href="/transactions" />
        <MenuItem
          icon={MessageCircle}
          label="Customer Service Center"
          href="/contact"
        />
        <MenuItem
          icon={Wallet2}
          label="Binding Wallet Address"
          href="/wallet"
        />
        <div
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
          className="cursor-pointer flex items-center justify-between p-4 bg-[#121e3a] hover:bg-darkbg100 transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <LogOut className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">Logout</span>
          </div>
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
