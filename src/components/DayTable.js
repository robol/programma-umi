function DayTable({ children }) {
    return <table className="table table-sm table-striped my-4">
      <thead>
            <tr>
                <th rowSpan="2" className="border"></th>
                <th rowSpan="1" colSpan="3" className="align-top border">Polo Carmignani</th>
                <th colSpan="5" className="border">Polo Fibonacci</th>
                <th colSpan="4" className="border">Scuola Normale</th>
            </tr>
            <tr>
                <th>Aula Magna</th>
                <th>Aula 1</th>
                <th className="border-end">Aula 2</th>
                <th>Aula Magna</th>
                <th>Aula 1</th>
                <th>Aula 2</th>
                <th>Aula 3</th>
                <th className="border-end">Aula 4</th>
                <th>Bianchi</th>
                <th>Azzurra</th>
                <th>Stemmi</th>
                <th className="border-end">Dini</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
        </table>;
}

export default DayTable;