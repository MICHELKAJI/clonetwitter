function Button ({style,children, onclick}){
    return <div>
        <button  className={style} onClick={onclick}>{children}</button>
    </div>
}
export default Button;