const encodedUri = encodeURI(uri);

<Image source={{uri: encodedUri}} style={styles.image} />

This will encode the URI, handling special characters and resolving the image loading issue.