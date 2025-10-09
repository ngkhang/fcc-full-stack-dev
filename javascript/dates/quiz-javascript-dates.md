# JavaScript Dates Quiz

1. What is the JavaScript Date object used for?
    - [x] Work with both dates and time.
    - [ ] Work with just dates only.
    - [ ] Work with just leap years.
    - [ ] Work with just time only.

2. Which code creates a new `Date` object instance?
    - [ ] `Date.new()`
    - [ ] `new.Date()`
    - [x] `new Date()`
    - [ ] `Date.fetch()`

3. How does `Date.now()` work?
    - [x] It returns the current time in milliseconds since January 1, 1970.
    - [ ] It returns the current time in nanoseconds since July 4, 1776.
    - [ ] It returns the current date in minutes since January 1, 1970.
    - [ ] It returns the previous time in milliseconds since January 1, 1974.

4. Which method returns the current year?
    - [ ] `getLeapYear()`
    - [ ] `getNewYear()`
    - [x] `getFullYear()`
    - [ ] `getLastYear()`

5. Which method returns the current month, as a zero-indexed integer?
    - [ ] `fetchMonth()`
    - [ ] `get.Month()`
    - [x] `getMonth()`
    - [ ] `getCalendar()`

6. Which method formats a date as a string?
    - [ ] `toStingy()`
    - [ ] `getMonth()`
    - [x] `toString()`
    - [ ] `formatDate()`

7. What would the result of `console.log(new Date().getFullYear());` be, if it is June 12th 2022?
    - [ ] `"06/12/2022"`
    - [ ] `"2023"`
    - [x] `"2022"`
    - [ ] `"June 12th 2022"`

8. What does `fr-FR` in `date.toLocaleDateString("fr-FR")` represent?
    - [ ] A French-Finnish locale.
    - [ ] A French-Italian locale.
    - [ ] A French-Canadian locale.
    - [x] A French locale.

9. If the time in your locale is formatted as `HH:MM:SS AM/PM`, which line of code would correctly display the current time?
    - [ ] `console.log(new Date().toString());`
    - [x] `console.log(new Date().toLocaleTimeString());`
    - [ ] `console.log(new Date().toCityDateString());`
    - [ ] `console.log(new Date().toLocaleDateString());`

10. In which format does the `toISOString()` method return a date?
    - [ ] A USA-863 string format.
    - [ ] A UTC string format.
    - [x] An ISO-8601 string format.
    - [ ] An MP3 string format.

11. What should an ISO-8601 date format look like?
    - [ ] `DD-MM-YYTHH`
    - [ ] `DD-MM-YYYY`
    - [x] `YYYY-MM-DDTHH:mm:ss.sssZ`
    - [ ] `YYYY-MM-DDTHH:mm:ssZ`

12. What is the corresponding month for `console.log(new Date(2003, 6, 27).getMonth());`?
    - [x] July
    - [ ] June
    - [ ] January
    - [ ] April

13. How would you format a date to a locale-specific string or a more readable format?
    - [ ] `.toLocaleDate()`
    - [x] `.toLocaleDateString()`
    - [ ] `.toLocaleString()`
    - [ ] `.toLocaleTimeString()`

14. What is the default locale used by the `toLocaleDateString()` method if no locales parameter is provided?
    - [ ] English (Great Britain).
    - [ ] French (France).
    - [x] The user's system locale.
    - [ ] The locale closest to United States.

15. What gets assigned to `now` in the code below?

    ```js
    const now = new Date();
    ```

    - [ ] The current time in nanoseconds since January 1, 1990.
    - [ ] The current date in milliseconds minus the Unix epoch.
    - [x] The current date and time based on your computer system's clock.
    - [ ] The current time in milliseconds since January 1, 1990.

16. What is the output of `console.log(new Date(2003, 6, 27).getFullYear());`?
    - [ ] `"27/6/2003"`
    - [ ] `27`
    - [x] `2003`
    - [ ] `6`

17. What does `getDate` return when the date is invalid?
    - [ ] `undefined`
    - [ ] `null`
    - [ ] `0`
    - [x] `NaN`

18. If we are in the month of October, what will `console.log(new Date().getMonth());` output?
    - [x] `9`
    - [ ] `10`
    - [ ] `3`
    - [ ] `1`

19. Which option will output `2021` for the following object?

    ```js
    const d = new Date("2021-12-25");
    ```

    - [ ] `console.log(d.toUTCString())`
    - [ ] `console.log(d.getDate())`
    - [x] `console.log(d.getFullYear())`
    - [ ] `console.log(d.getTime())`

20. Which option will output `"2021-12-25T00:00:00.000Z"` for the following object?

    ```js
    const d = new Date("2021-12-25");
    ```

    - [ ] `console.log(d.getFullYear())`
    - [ ] `console.log(d.toUTCString())`
    - [ ] `console.log(d.getTime())`
    - [x] `console.log(d.toISOString())`
