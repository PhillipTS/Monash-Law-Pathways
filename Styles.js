import { PRIMARY, BACKGROUND, SECONDARY_BACKGROUND, BORDER_RADIUS } from './Constants';

export default {
    container: {
        flex: 1,
        backgroundColor: BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: SECONDARY_BACKGROUND,
        borderRadius: BORDER_RADIUS
    },
    title: {
        flex: 1,
        flexWrap: 'nowrap',
        margin: 5,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text: {
        color: PRIMARY
    }
}