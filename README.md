# Form Submit Behavior Experiment

## Setup

```sh
$ git clone https://github.com/FlandreDaisuki/Form-Submit-Behavior-Experiment.git
$ cd Form-Submit-Behavior-Experiment
$ pnpm i
# or yarn
# or npm i
```

## Run & Test

```sh
$ node server.mjs
```

## Comparison

### Firefox

Go `http://localhost:3000` & click submit button

```json
{"ua":"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0","greetings":"Hi"}
```

Go `http://localhost:3000/race?t=10` & click submit button

```json
{"ua":"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0","greetings":"Hi"}
```

Go `http://localhost:3000/race?t=1000` & click submit button

```json
{"ua":"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0","greetings":"Hi"}
```

### Chrome

Go `http://localhost:3000` & click submit button

```json
{"ua":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36","greetings":"Hello"}
```

Go `http://localhost:3000/race?t=10` & click submit button

```json
{"ua":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36","greetings":"こんにちは"}
```

Go `http://localhost:3000/race?t=1000` & click submit button

```json
{"ua":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36","greetings":"你好"}
```
