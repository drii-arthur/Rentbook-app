import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import StarRating from 'react-native-star-rating'
import { getBook } from '../Redux/Actions/books'
import { connect } from 'react-redux'


class AllBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            starCount: 2.5,

        }
    }
    componentDidMount = async () => {
        await this.props.dispatch(getBook())
        this.setState({
            books: this.props.books.bookAllList
        })
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    render() {
        const { books } = this.state
        console.log(this.props.books.bookAllList, 'ikeh')
        return (
            <View style={style.container}>
                <View>
                    <Text style={style.textHeaderBook}>
                        Popular Books
                    </Text>
                </View>
                <View style={style.wrapper}>
                    {books ? books.map((data, index) => {
                        return (
                            <View style={{ width: '50%', padding: 15 }} key={index}>
                                <View style={style.bookCard}>
                                    <Image source={{ uri: `${data.image}` }} style={style.cardImage} />
                                </View>
                                <Text style={style.textImageCard}>{data.title}</Text>
                                <View style={{ width: '50%' }}>
                                    <StarRating style={{ width: '50%' }}
                                        disabled={true}
                                        emptyStar={require('../Assets/Icons/Star.png')}
                                        fullStar={require('../Assets/Icons/Star.png')}
                                        halfStar={require('../Assets/Icons/Star.png')}
                                        iconSet={'Ionicons'}
                                        maxStars={5}
                                        rating={this.state.starCount}
                                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                        fullStarColor={'#F3AC13'}
                                        starSize={13}
                                    />
                                </View>
                            </View>

                        )
                    }) : <Text>loading...</Text>}
                </View>

            </View>

        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books,

    };
};

export default connect(mapStateToProps)(AllBooks);

const style = StyleSheet.create({
    container: {
        marginTop: 20
    },
    textHeaderBook: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#303031',
        marginLeft: 20
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    bookCard: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#efefef',
        borderRadius: 5
    },
    cardImage: {
        borderRadius: 5,
        width: '100%',
        height: '100%'
    },
    textImageCard: {
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 5
    },
    star: {
        marginRight: 2
    }
})

