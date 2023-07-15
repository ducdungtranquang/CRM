import React, { useContext, useEffect, useRef, useState } from "react";
import { Steps } from "antd";
import styleHome from "../../components/home/home.module.css";
import styles from "../../components/potential/potential.module.css";
import PotentialStep1 from "@/components/potential/potential_steps/potential_step1";
import Testttt from "@/components/potential/potential_steps/potential_step2";
import { SidebarContext } from "@/components/context/resizeContext";
import FooterStep from "@/components/potential/potential_steps/potentail_footer";

const ImportFiles: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const [currentStep, setCurrentStep] = useState<number>(0)

  useEffect(() => {
    if (isOpen) {
      mainRef.current?.classList.add("content_resize");
    } else {
      mainRef.current?.classList.remove("content_resize");
    }
  }, [isOpen]);

  return (
    <div className={styleHome.main} ref={mainRef}>
      <div className={styles.main_importfile}>
        <div className="customStep flex-center">
          <Steps
            current={currentStep}
            labelPlacement="vertical"
            items={[
              {
                title: "",
                description: "Chọn tệp nguồn",
              },
              {
                title: "",
                description: "Ghép dữ liệu",
              },
              {
                title: "",
                description: "Cập nhật thông tin",
              },
              {
                title: "",
                description: "Xác thực",
              },
            ]}
          />
        </div>

        <div className={styles.formInfoStep}>
          <PotentialStep1 />
          {/* <Testttt/> */}
        </div>
        <FooterStep currentStep={currentStep} setCurrentStep = {setCurrentStep}/>
      </div>
    </div>
  );
};

export default ImportFiles;
