function TimeCell({ start, end }) {
    return <td className="text-nowrap">
        {start} &mdash; {end}
    </td>;
}

export default TimeCell;