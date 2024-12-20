This bug occurs when using the Expo `Image` component with a URI that contains special characters, such as spaces or accented characters. The image fails to load, and no error is thrown in the console.  The problem stems from improper URI encoding within the Expo Image component when handling certain URI characters. 