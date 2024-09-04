function Button({ label, borderColor, bgColor, txtColor }) {
     
    return (
        <button className={`border ${borderColor ? borderColor : "blue-400" } ${ bgColor ? bgColor : "bg-white"} ${txtColor ? txtColor : "txt-yellow"} rounded-md p-3 m-4`} >
        { label }
        </button >
    );
}

export default Button;