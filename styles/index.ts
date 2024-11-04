import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'relative',
    },
    gradient: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    headerTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 50,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchButton: {
        padding: 8,
    },
    categoryTabs: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingBottom: 6,
        gap: 12,
        marginTop: 4
    },
    categoryTab: {
        // paddingVertical: 7,
        paddingHorizontal: 16,
        height: 34,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    categoryTabText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    categoryTabTextWithIcon: {
        color: '#fff',
        fontSize: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    featuredContent: {
        width: '100%',
        height: 528,
        marginBottom: 24,
        position: 'relative',
        paddingHorizontal: 20,
    },
    featuredWrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    featuredImageContainer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,
    },
    featuredImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    featuredGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
    },
    featuredOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 16,
        // paddingHorizontal: 16,
        zIndex: 2,
    },
    overlayGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200%',
        zIndex: -1,
    },
    featuredCategories: {
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    categoriesText: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.9,
        textAlign: 'center',
    },
    featuredButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginHorizontal: 16,
        paddingHorizontal: 16,
    },
    playButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 4,
        gap: 8,
        flex: 1,
    },
    playButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    myListButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(51, 51, 51, 0.9)',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 4,
        gap: 8,
        flex: 1,
    },
    myListButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 10,
        marginTop: -8,
    },
    contentList: {

        paddingHorizontal: 16,

    },
    contentItem: {

        width: 120,
        marginRight: 12,
        position: 'relative',
    },
    thumbnail: {
        width: '100%',
        aspectRatio: 2 / 3,
        borderRadius: 6,
    },
    movieRow: {
        marginBottom: 24,
    },
    blurContainer: {
        width: '100%',
    },
    scrollViewContent: {
        paddingBottom: 100,
        paddingTop: 20,
    },
    activeTab: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    comingSoonList: {
        paddingHorizontal: 16,
        gap: 24,
    },
    comingSoonItem: {
        flexDirection: 'row',
        gap: 16,
    },
    dateBadge: {
        alignItems: 'center',
        width: 50,
    },
    dateMonth: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateDay: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentPreview: {
        flex: 1,
        gap: 12,
    },
    previewImage: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 8,
    },
    previewInfo: {
        gap: 8,
    },
    previewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    previewTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
    },
    previewRating: {
        color: '#fff',
        fontSize: 14,
        backgroundColor: '#333',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    previewDescription: {
        color: '#999',
        fontSize: 14,
        lineHeight: 20,
    },
    previewActions: {
        flexDirection: 'row',
        gap: 24,
        marginTop: 8,
    },
    reminderButton: {
        alignItems: 'center',
        gap: 4,
    },
    reminderText: {
        color: '#fff',
        fontSize: 12,
    },
    infoButton: {
        alignItems: 'center',
        gap: 4,
    },
    infoText: {
        color: '#fff',
        fontSize: 12,
    },
}
);