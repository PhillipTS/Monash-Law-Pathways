import {
    BACKGROUND,
    SECONDARY,
    PRIMARY,
    SECONDARY_BACKGROUND,
    WHITE
} from './Constants';

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
        borderRadius: 5
    },
    title: {
        flex: 1,
        flexWrap: 'nowrap',
        margin: 5,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text: {
        color: 'black'
    }
}