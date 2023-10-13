# Sprint #3: Mock - Project

This sprint focuses on building the beginnings of a web front-end application. We utilize HTML and CSS to set up a basic command-prompt interface, and TypeScript with React to organize components and process events in that interface (e.g., commands being entered).

Note that this repo contains previous elements that will be described in this [repo link.](https://github.com/cs0320-f23/csv-elaine-wangg)

**Team members and contributions:** Elaine Wang (ewang111), Elijah Whang (eswhang)

**Total estimated time it took to complete project:** Approximately 10 hours.

**[Link to repo](https://github.com/cs0320-f23/mock-eswhang-ewang111)**

## Description
This program focuses on our stakeholder: a real estate appraiser who is responsible for assessing the market value of a property. They are licensed to appraise one- to four-family homes and work on behalf of their appraisal firm and am unconnected to the local homeowners, lawyers, and larger banks that hire them.
While much of their time is spent on-site evaluating the property itself, part of their job is also to consider similar properties in the neighborhood and surrounding area, because they influence the value of the property I am assessing.

### End-User #1:
Users of our web application can enter commands and see the results in a scrollable history display, which contains the results of all commands they have run so far. 

They can use the mode command to switch between ‘brief’ and ‘verbose’ output. The application should start in ‘brief’ mode. 
* Enter command = `mode` + `brief` to displays
  * `<result of running the command>`
* Enter command = `mode` + `verbose` to displays in the format of two lines
  * `Command: <command text>`
  * `Output: <result of running the command>`


### End-User #2:
Users of our web application can able to load a CSV file's contents by entering commands into the command prompt. Furthermore, at most one CSV dataset should be loaded at any given time, but the user must be able to switch between datasets using this command.

* Enter command = `load_file` + `<csv-file-path>` where csv-file-path denotes the actual path of the CSV file I want to open.

### End-User #3: 
Users of our webapp, can view the CSV file after an initial loading. Our webapp will  display the full CSV data in an HTML table, which might be more structured (and thus much easier to test) than a raw string.
* Enter command = `view` to view the CSV data in a structured table. 

### End-User #4:
Users of our webapp, can search through for a specific value with an option to either provide a column header, column index, or no column identifier upon completion of loading a CSV file's contents. 
* Enter command = `search column = ` + `<column header>` + ` value = ` + `<value>` + ` header = ` + `<true or false>` to serach with column identifiers.
* Enter command = `search column = ` + ` value = ` + `<value>` + ` header = ` + `<true or false>` to search without column identifiers.

## Getting Started

### Installing
* Open program using VSCode.
* `cd mock` to enter the mock directory and run `npm install` to configure settings and import relevant packages. 
* Run `npm start` to start the local host on the internet.
* Run `npx playwright test` to verify tests. 
* When running test please check your local specific filepath.

### Executing program

* For front-end users, run server method located [here.](https://github.com/cs0320-f23/mock-eswhang-ewang111/tree/main/mock/src)
* For developers, run test files located [here.](https://github.com/cs0320-f23/mock-eswhang-ewang111/tree/main/mock/tests)

## Design Choices

Included in this program are three major packages: components, data, and styles.

### Components 
Components serve and provides the back-end the communication between the client and the server. Functions as the controller to process user inputs and provide user outputs.

#### <ins>App</ins>  
This function serves as the highest level component. 

**Description:** Loads a CSV file if one is located at the specified path, where no more than one CSV file should be loaded at a time. Status of loading is communicated with front-end user through detail displays of a success message or specified error message. 

#### <ins>Load</ins>  

**Description:** Loads a CSV file if one is located at the specified path, where no more than one CSV file should be loaded at a time. Status of loading is communicated with front-end user through detail displays of a success message or specified error message. 

#### <ins>View</ins>

**Description:** Sends back the entire CSV file's contents as a Json 2-dimensional array. In order view CSV file, `load_file` + `<csv-file-path>` must be called before.
Status of loading is communicated with front-end user through detail displays of a success message or specified error message.

#### <ins>Search</ins>

**Description:** Sends back rows matching a given search criteria. In order view CSV file, `load_file` + `<csv-file-path>` must be called before.
Status of loading is communicated with front-end user through detail displays of a success message or specified error message.

Search include the ability to: 
* Search by column index &rarr; input column index.
* Search by column header &rarr; input column name. 
* Search across all columns &rarr; input blank.

#### <ins>REPL</ins>

**Description:** A REPL, or Read-Eval-Print Loop, is an interactive programming environment typically used for interpreted programming languages. It allows users to enter code, have it executed, and see the results in real-time. 

#### <ins>REPLHistory</ins>

**Description:** Is where all command history will go and is stored along with HTML formatting of responses to be displayed back to users. 

#### <ins>REPLInput</ins>

**Description:** Is the integration of all functionality from various classes to ensure that information is relayed from `controlledinput.tsx` to its corresponding action. 

### Data
Our mock data are sets of dummy data or test data that is created for testing and development purposes. It is not real or actual data but is generated to simulate the structure and behavior of real data. This allows and enables integration testing so that different parts of a software system need to be tested together to ensure they work seamlessly, mock data is used to simulate the interaction between these components.

### Styles 
Through the main.css file, developers can apply the default styles to your entire project. For individual components, developers can create dedicated CSS files in their components' directories. Furthermore, our styles include responsive design elements, making it easy to create web applications that adapt to various screen sizes. This packaging allows for the creation of CSS files to customize specific aspects of the styles, such as colors or typography.

## Errors and Bugs
Regex in parser class is not implemented perfectly resulting in weird formatting and extra spaces in parsed CSV file.
This will result in issues when the user CSV that is not initially cleaned. This issue is prevalent especially if the CSV file contains
quotations resulting in a json file with backslashes. 

## Tests
Included in this program are five classes that will be tested: Load, View, and Search.
NOTE: for tests that are named `testBeforeLoad()` in the Search and View test suite, these must be run alone and not as a suite for them to pass.

### Load
`Load.spec.ts` incorporates 5 Integration tests:
* Testing basic functionality with an existing CSV file.
* Testing basic functionality with an empty CSV file.
* Testing a file that does not exist or cannot be opened.
* Testing a file that contains variable number of columns. 

### View
`View.spec.ts` incorporates 3 Integration tests:
* Testing basic functionality with an existing CSV file.
* Testing basic functionality with an empty CSV file.
* Testing before `load_file` is processed.

### Search
`View.spec.ts` incorporates 7 Integration tests:
* Testing basic functionality of a search term with existing column identifier with a CSV file that has a header.
* Testing basic functionality of a search term with existing column identifier with a CSV file that does not have a header.
* Testing a search term that does not have a column identifier. 
* Testing a search term that has incorrect column identifier. 
* Testing a search term that does not exist. 
* Testing before `load_file` is processed.

### App
`App.spec.ts` incorporates _ Integration tests: 
* Testing brief mode
* Testing verbose mode
* Testing the visual view of an input bar. 
* Testing the commands inputted into the input box. 
* Testing the visual view of a button. 
* Testing the clicking of the button. 

## Version History
* 0.2
    * Various bug fixes and optimizations
    * See [commit change](https://github.com/cs0320-f23/mock-eswhang-ewang111/commits/main)
* 0.1
    * Initial commit

## License
This project is licensed under the Elaine Wang and Elijah Whang License - see the LICENSE.md file for details

## Acknowledgments
Thank you CS 0320 teaching staff and our fellow peers! 