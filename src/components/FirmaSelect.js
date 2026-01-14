import React from "react";
import { styles } from "../styles";

class FirmaSelect extends React.Component {
  render() {
    const { firmaNo, firmaListesi, onChange } = this.props;
    return (
      <select value={firmaNo} onChange={onChange} style={styles.select}>
        <option value="">Firma seç</option>
        {firmaListesi.map((firma) => (
          <option key={firma.no} value={firma.no}>
            {firma.ad}
          </option>
        ))}
      </select>
    );
  }
}

export default FirmaSelect;
