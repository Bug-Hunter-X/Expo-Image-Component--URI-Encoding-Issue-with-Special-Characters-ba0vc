# Expo Image Component URI Encoding Bug

This repository demonstrates a bug in the Expo `Image` component where images with URIs containing special characters (e.g., spaces, accented characters) fail to load. The issue is caused by improper URI encoding within the component, resulting in a silent failure without any console errors.

## Bug Description

The `Image` component from Expo fails to load images when provided with a URI that includes spaces or accented characters.  No error messages are logged to the console, making debugging difficult.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with special characters fails to load, while the image with a standard URI loads correctly.

## Solution

The solution involves manually encoding the URI before passing it to the `Image` component.  This ensures that the URI is correctly formatted for use by the underlying image loading mechanism.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.