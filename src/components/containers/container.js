import css from './containers.module.scss';

export const Container = (props) => {
    const {children} = props
    return (
        <div className={css.container}>
            {children}
        </div>
    )
}