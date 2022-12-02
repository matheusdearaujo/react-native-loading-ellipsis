# React Native Loading Ellipsis

<div>
    <a href="https://github.com/matheusdearaujo/react-native-loading-ellipsis/issues">
        <img src="https://img.shields.io/github/issues/matheusdearaujo/react-native-loading-ellipsis">
    </a>
    <a href="https://github.com/matheusdearaujo/react-native-loading-ellipsis/pulls">
        <img src="https://img.shields.io/github/issues-pr/matheusdearaujo/react-native-loading-ellipsis">
    </a>
</div>

<br>

A fork of a [simple library loading dots component](https://github.com/JanidHam/react-native-loading-ellipsis).

<br>

![](.github/assets/ellipsis-loading.gif)


## Installation
npm:
```
npm install --save @matheusdearaujo/react-native-loading-ellipsis
```

yarn:
```
yarn add @matheusdearaujo/react-native-loading-ellipsis
```

## Usage
```js
import EllipsisLoading from "@matheusdearaujo/react-native-loading-ellipsis"
```

Simply place a `<EllipsisLoading />` inside of any compnent.

```js
<View style={{ flex: 1 }}>
    <EllipsisLoading />
</View>
```

### Styling Usage
EllipsisLoading is fully customizable using the `styleDot, animationDelay, numberOfDots, minOpacity, and dotSize` props.

Example usage to change dots color and spacing (as preview):

```js
<View style={{ flex: 1 }}>
    <EllipsisLoading
        styleDot={{
          backgroundColor: "#6c5ce7",
          margin: 5,
        }}
    />
</View>
```

## Documentation

### EllipsisLoading Component
| Name                      | Description                              | Default     | Type   |
|---------------------------|------------------------------------------|-------------|--------|
| styleDot                  | Dot styles                               | undefined      | ViewStyle |
| animationDelay            | Delay for animation in milliseconds      | 300         | Number |
| numberOfDots              | Number of dot to display                 | 3           | Number |
| minOpacity                | Opacity of dot animation                 | 0.2         | Number |
| dotSize                   | Size of the dots                         | 12          | Number |

## How to contribute
Read our [contribution](/CONTRIBUTING.md) guide.

## Contributors
<a href="https://github.com/matheusdearaujo/react-native-loading-ellipsis/graphs/contributors"><img src="https://contrib.rocks/image?repo=matheusdearaujo/react-native-loading-ellipsis" /></a>

## Author
| [<img src="https://avatars.githubusercontent.com/u/61164981?v=3&s=115"><br><sub>@matheusdearaujo</sub>](https://github.com/matheusdearaujo) |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |

## LICENSE
This repository use [MIT License](/LICENSE).
