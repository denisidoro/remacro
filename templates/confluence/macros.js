const Confl = ({ children, macroid, ...props }) => {
    const entries = Object.entries(props)

    if (entries.length == 0) {
        return `{${macroid}}${children}{${macroid}}`
    }

    const extra = Object.entries(props).reduce((s, [k, v]) => `${s}${k}=${v}|`, "").slice(0, -1)
    return `{${macroid}:${extra}}${children}{${macroid}}`
}

const Info = (props) => <Confl {...props} macroid="info" />

const Tip = (props) => <Confl {...props} macroid="tip" />

const Note = (props) => <Confl {...props} macroid="note" />

const Warning = (props) => <Confl {...props} macroid="warning" />

const Section = (props) => <Confl {...props} macroid="section" />

const Column = (props) => <Confl {...props} macroid="column" />

const Toc = (props) => <Confl {...props} macroid="toc" />