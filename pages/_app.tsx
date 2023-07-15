import { AccessContextComponent } from "@/components/context/accessContext";
import { SidebarResize } from "@/components/context/resizeContext";
import Header from "@/components/header/header";
import useModal from "@/components/hooks/useModal";
import Sidebar from "@/components/sidebar/sidebar";
import "@/styles/globals.css";
import '../../next-main/styles/styles.css';
import styles from "../components/sidebar/sidebar.module.css";
import type { AppProps } from "next/app";
import ChatBusiness from "@/components/chat/chat";
export default function App({ Component, pageProps }: AppProps) {
  const {isOpen, toggleModal} = useModal("icon_menu_nav", [styles.sidebar])
  return (
    <>
      <AccessContextComponent>
        <SidebarResize>
          <Header toggleModal={toggleModal}/>
          <Sidebar isOpened={isOpen}/>
          <ChatBusiness />
          <Component {...pageProps} />
        </SidebarResize>
      </AccessContextComponent>
    </>
  );
}
