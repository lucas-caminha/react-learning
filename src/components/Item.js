import PropTypes from 'prop-types'

function Item({marca, anoLancamento}) {
    return (
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

// Default Value
Item.defaultProps = {
    marca: 'Vazio',
    anoLancamento: 2000,
}

export default Item;