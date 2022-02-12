import react, { useState, useEffect } from "react";
import MaterialTable from "material-table";
const Stock = () => {
  return (
    <div className="container">
      <h1 className="text-primary text-center display-4"> Stock </h1>
      <MaterialTable
        className="m-4"
        columns={[
          { title: "Adı", field: "name" },
          { title: "Soyadı", field: "surname" },
          { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
          {
            title: "Doğum Yeri",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
          }
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
        ]}
        title="Stock"
        options={{
          exportButton: true
        }}
      />
    </div>
  );
};
export default Stock;
