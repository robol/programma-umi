function SemiPlenary({ speaker, title }) {
    return <td>
        { speaker } <br />
        <span className="small text-muted">(conferenza su invito)</span>
    </td>;
}

export default SemiPlenary;