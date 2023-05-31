function TimeCell({ start, end }) {
    return <td className="text-nowrap">
        {start} &ndash; {end}
    </td>;
}

export default TimeCell;
