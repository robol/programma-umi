function OtherEvent({ name, rowSpan }) {
    
    return <td rowSpan={rowSpan}>
        <span className="">{ name }</span>
    </td>;
}

export default OtherEvent;