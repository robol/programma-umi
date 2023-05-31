function DayTable({ children }) {
    return <table className="table table-sm table-striped my-4 table-bordered">
      <thead>
            <tr>
                <th rowSpan="2" className="border"></th>
                <th rowSpan="1" colSpan="3" className="align-top border">Polo Carmignani</th>
                <th colSpan="5" className="border">Polo Fibonacci</th>
                <th colSpan="4" className="border">Scuola Normale</th>
            </tr>
            <tr>
                <th width="8%">Aula Magna</th>
                <th width="8%">Aula&nbsp;1</th>
                <th width="8%" className="border-end">Aula&nbsp;2</th>
                <th width="8%">Aula&nbsp;Magna</th>
                <th width="8%">Aula&nbsp;A</th>
                <th width="8%">Aula&nbsp;F1</th>
                <th width="8%">Aula&nbsp;G1</th>
                <th width="8%" className="border-end">Aula&nbsp;L1</th>
                <th width="8%">Aula&nbsp;Bianchi</th>
                <th width="8%">Sala&nbsp;Azzurra</th>
                <th width="8%">Sala&nbsp;Stemmi</th>
                <th width="8%" className="border-end">Aula&nbsp;Dini</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
        </table>;
}

export default DayTable;
