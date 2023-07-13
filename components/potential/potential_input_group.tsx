import styles from "./potential.module.css";
export default function PotentialInputGroup() {
  return (
    <div className={styles.main__control}>
      <div className={`${styles.main__control_select} flex_align_center`}>
        <div className={`${styles.select_item} flex_align_center ${styles.select_item_time}`}>
          <label htmlFor="" className="">
            Thời gian tạo:{" "}
          </label>
          <div className={`${styles.input_item_time} flex_between`}>
            <input type="date" name="" id="start_time" /> -
            <input type="date" name="" id="end_time" />
          </div>
        </div>
        <div className={`${styles.select_item} flex_align_center`}>
          <label htmlFor="" className="">
            Loại hình:
          </label>
          <select
            className="select2 select2-hidden-accessible"
            data-select2-id={1}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="" data-select2-id={3}>
              Tất cả
            </option>
          </select>
          <span
            className="select2 select2-container select2-container--default"
            dir="ltr"
            data-select2-id={2}
            style={{ width: "100%" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
                aria-labelledby="select2-g0q1-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-g0q1-container"
                  role="textbox"
                  aria-readonly="true"
                  title="Tất cả"
                >
                  Tất cả
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
        </div>
        <div className={`${styles.select_item} flex_align_center`}>
          <label htmlFor="" className="">
            Lĩnh vực:
          </label>
          <select
            className="select2 select2-hidden-accessible"
            data-select2-id={4}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="" data-select2-id={6}>
              Tất cả
            </option>
          </select>
          <span
            className="select2 select2-container select2-container--default"
            dir="ltr"
            data-select2-id={5}
            style={{ width: "100%" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
                aria-labelledby="select2-erl2-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-erl2-container"
                  role="textbox"
                  aria-readonly="true"
                  title="Tất cả"
                >
                  Tất cả
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
        </div>
        <div className={`${styles.select_item} flex_align_center`}>
          <label htmlFor="" className="">
            Nguồn gốc:
          </label>
          <select
            className="select2 select2-hidden-accessible"
            data-select2-id={7}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="" data-select2-id={9}>
              Tất cả
            </option>
          </select>
          <span
            className="select2 select2-container select2-container--default"
            dir="ltr"
            data-select2-id={8}
            style={{ width: "100%" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
                aria-labelledby="select2-hgye-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-hgye-container"
                  role="textbox"
                  aria-readonly="true"
                  title="Tất cả"
                >
                  Tất cả
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
        </div>
        <div className={`${styles.select_item} flex_align_center`}>
          <label htmlFor="" className="">
            Người tạo:
          </label>
          <select
            className="select2 select2-hidden-accessible"
            data-select2-id={10}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="" data-select2-id={12}>
              Tất cả
            </option>
          </select>
          <span
            className="select2 select2-container select2-container--default"
            dir="ltr"
            data-select2-id={11}
            style={{ width: "100%" }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
                aria-labelledby="select2-hf6y-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-hf6y-container"
                  role="textbox"
                  aria-readonly="true"
                  title="Tất cả"
                >
                  Tất cả
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}
