# rn-assignment4-11353419
# Theophilus Sackey
This assignment involves creating a two-page app using React Native. The app includes a Login page and a Home (or landing) page. Components within the app are organized into two main folders within the src directory: pages and components. There are a total of nine components, with App.js serving as the routing file for navigation between pages. Stack navigation is utilized to move between the Login and Home pages. Components are reused across pages to reduce code duplication.
# Login.js
The Login.js component contains all the code related to the login page. It utilizes the Header.js, SocialLoginButton.js, and InputField.js components. Core components like StyleSheet, Text, View, and TouchableOpacity are used to implement the Login page's functionality and styling, with View serving as the container for other components.

# Home.js
The Home.js component contains all the code for the Home page. It incorporates the HomeHeader.js, SearchBar.js, FeaturedJobs.js, and PopularJobs.js components. Core components like StyleSheet, Text, and View are used to implement the Home page's functionality and styling, with Text used to display text elements.

# Header.js
The Header.js component provides the code for the header in the login page. It includes core components like View, Text, and StyleSheet for styling elements. On the UI, the header is located at the top-left corner, displaying "Jobizz," "Welcome Back :wave:," and "Let's log in. Apply to jobs!" as text elements.

# InputField.js
The InputField.js component contains the code for the input fields where users enter their name and email to log in. It uses core components like TextInput, which has a placeholder parameter called in Login.js, and StyleSheet for styling.

# SocialLoginButton.js
The SocialLoginButton.js component contains the code for the social media login buttons on the login page. These buttons are passed as parameters in Login.js to make them functional. Core components like StyleSheet, Image, and TouchableOpacity are used for styling, button creation, and functionality.

# HomeHeader.js
The HomeHeader.js component provides the code for the home page header. After logging in, user input from the login page is displayed along with the user's picture on the home page. Core components used include Image, View, Text, and StyleSheet.

# FeaturedJobs.js
The FeaturedJobs.js component contains the code for the Featured Jobs section on the home page. It uses core components like View, Text, StyleSheet, Image, and FlatList for styling and UI functionality. The FlatList component enables horizontal scrolling of featured jobs, with data stored in an array.

# PopularJobs.js
The PopularJobs.js component contains the code for the Popular Jobs section. Core components include View, Text, StyleSheet, Image, and ScrollView for styling and UI functionality. The ScrollView component allows vertical scrolling of popular jobs, with data stored in an array.

# SearchBar.js
The SearchBar.js component contains the code for the search bar section.A functional component that takes placeholder and onChangeText as props.
Uses TextInput for the search input field.
Styled with a simple StyleSheet.

## Screenshots

### Screenshot 1
![Screenshot 1](jobizz-app\assets\jobizzScreenshot.jpg)

### Screenshot 2
![Screenshot 2](jobizz-app\assets\Jobizzscreenshot2.jpg)
