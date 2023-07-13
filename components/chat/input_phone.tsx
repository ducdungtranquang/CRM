import styles from "./chat.module.css";

export default function InputPhone() {
  return (
    <div
      className={`${styles.business_assistant_item} ${styles.business_assistant_item_phone}`}
    >
      <div className={`${styles.business_assistant_item_gray} ${styles.box_phone}`}>
        <label className={styles.lbl_title}>Số điện thoại</label>
        <form action="" onSubmit={()=>false} style={{ width: "100%" }}>
          <input
            autoComplete="off"
            name=""
            type="text"
            placeholder="Nhập số điện thoại"
            className={styles.input_phone}
          />
        </form>
      </div>
      <button type="button" className={styles.phone_btn_icon}>
        <img
          src="https://crm.timviec365.vn/assets/img/business_assistant/phone.svg"
          alt=""
        />
      </button>
    </div>
  );
}
