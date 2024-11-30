
function Link({classe, href, target, children}){
    
    if({target}.target === "_blank"){
        console.log({target}.target);
        return (
            <a 
                className={`link ${classe}`}
                target="_blank"
                href={href}
            >
                {children}
            </a>
        );
    } else {
        return(
            <a 
                className={`link ${classe}`}
                href={href}
                target={target}
            >
                {children}
            </a>
        );
    }
}

export default Link;
