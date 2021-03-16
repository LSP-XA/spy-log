# spy-log

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Details](#details)
- [API](#api)
  - [Table of contents](#table-of-contents)
    - [Enumerations](#enumerations)
    - [Classes](#classes)
    - [Interfaces](#interfaces)
  - [References](#references)
    - [default](#default)
  - [Type aliases](#type-aliases)
    - [RecordType](#recordtype)
- [Classes](#classes-1)
- [Class: Log](#class-log)
  - [Hierarchy](#hierarchy)
  - [Constructors](#constructors)
    - [constructor](#constructor)
  - [Properties](#properties)
    - [curStage](#curstage)
    - [namespace](#namespace)
    - [console](#console)
    - [getLogFn](#getlogfn)
  - [Methods](#methods)
    - [debug](#debug)
    - [error](#error)
    - [group](#group)
    - [info](#info)
    - [log](#log)
    - [print](#print)
    - [printGroup](#printgroup)
    - [stage](#stage)
    - [warn](#warn)
- [Class: LogGroup](#class-loggroup)
  - [Hierarchy](#hierarchy-1)
  - [Constructors](#constructors-1)
    - [constructor](#constructor-1)
  - [Properties](#properties-1)
    - [curStage](#curstage-1)
    - [namespace](#namespace-1)
    - [console](#console-1)
    - [getLogFn](#getlogfn-1)
  - [Methods](#methods-1)
    - [debug](#debug-1)
    - [end](#end)
    - [error](#error-1)
    - [group](#group-1)
    - [info](#info-1)
    - [log](#log-1)
    - [print](#print-1)
    - [printGroup](#printgroup-1)
    - [stage](#stage-1)
    - [warn](#warn-1)
- [Enums](#enums)
- [Enumeration: LogLevel](#enumeration-loglevel)
  - [Enumeration members](#enumeration-members)
    - [Error](#error)
    - [Info](#info)
    - [Log](#log)
    - [Verbose](#verbose)
    - [Warning](#warning)
- [Interfaces](#interfaces-1)
- [Interface: GroupRecord](#interface-grouprecord)
  - [Properties](#properties-2)
    - [collapsed](#collapsed)
    - [name](#name)
    - [records](#records)
- [Interface: LogRecord](#interface-logrecord)
  - [Properties](#properties-3)
    - [level](#level)
    - [message](#message)
    - [stage](#stage-2)
    - [time](#time)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

```sh
npm install spy-log
```

| Format                             | Instructions                          |
| ---------------------------------- | ------------------------------------- |
| **TypeScript**                     | `import Log from "spy-log";`          |
| **Node (CommonJS)**                | `const { Log } = require("spy-log");` |
| **ES Modules (Browsers, webpack)** | `import Log from "spy-log";`          |

# Synopsis

```ts
import Log from 'spy-log';

async function subTask(logger) {
  logger.info('massage in suntask');
  await request('http://example.com', logger.group('getExample'));
  logger.end();
}

const logger = new Log('main');

logger.log('main start');
subTask(logger.group('subtask'));
```

# Details

<!-- usage -->

<!-- commands -->

# API

<a name="readmemd"></a>

## Table of contents

### Enumerations

- [LogLevel](#enumsloglevelmd)

### Classes

- [Log](#classeslogmd)
- [LogGroup](#classesloggroupmd)

### Interfaces

- [GroupRecord](#interfacesgrouprecordmd)
- [LogRecord](#interfaceslogrecordmd)

## References

### default

Renames and exports: [Log](#classeslogmd)

## Type aliases

### RecordType

Ƭ **RecordType**: [_LogRecord_](#interfaceslogrecordmd) \| [_GroupRecord_](#interfacesgrouprecordmd)

Log-records stored in LogGroup.records

Defined in: index.ts:48

# Classes

<a name="classeslogmd"></a>

[spy-log](#readmemd) / Log

# Class: Log

## Hierarchy

- **Log**

  ↳ [_LogGroup_](#classesloggroupmd)

## Constructors

### constructor

\+ **new Log**(`namespace`: _string_): [_Log_](#classeslogmd)

#### Parameters:

| Name        | Type     |
| :---------- | :------- |
| `namespace` | _string_ |

**Returns:** [_Log_](#classeslogmd)

Defined in: index.ts:69

## Properties

### curStage

• `Protected` `Optional` **curStage**: _string_

Defined in: index.ts:72

---

### namespace

• `Protected` **namespace**: _string_

---

### console

▪ `Static` **console**: Console

Defined in: index.ts:68

---

### getLogFn

▪ `Static` **getLogFn**: (`level`: [_LogLevel_](#enumsloglevelmd)) => (...`data`: _any_[]) => _void_

#### Type declaration:

▸ (`level`: [_LogLevel_](#enumsloglevelmd)): _function_

#### Parameters:

| Name    | Type                           |
| :------ | :----------------------------- |
| `level` | [_LogLevel_](#enumsloglevelmd) |

**Returns:** (...`data`: _any_[]) => _void_

Defined in: index.ts:62

Defined in: index.ts:69

## Methods

### debug

▸ **debug**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Defined in: index.ts:79

---

### error

▸ **error**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Defined in: index.ts:95

---

### group

▸ **group**(`name`: _string_): [_LogGroup_](#classesloggroupmd)

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `name` | _string_ |

**Returns:** [_LogGroup_](#classesloggroupmd)

Defined in: index.ts:121

---

### info

▸ **info**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Defined in: index.ts:87

---

### log

▸ **log**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Defined in: index.ts:83

---

### print

▸ **print**(`message`: _any_[], `level`: [_LogLevel_](#enumsloglevelmd), `stage?`: _undefined_ \| _string_, `inGroup?`: _boolean_): _void_

#### Parameters:

| Name       | Type                           |
| :--------- | :----------------------------- |
| `message`  | _any_[]                        |
| `level`    | [_LogLevel_](#enumsloglevelmd) |
| `stage`    | _undefined_ \| _string_        |
| `inGroup?` | _boolean_                      |

**Returns:** _void_

Defined in: index.ts:99

---

### printGroup

▸ **printGroup**(`name`: _string_, `records`: [_RecordType_](#recordtype)[], `collapsed`: _boolean_): _void_

#### Parameters:

| Name        | Type                          |
| :---------- | :---------------------------- |
| `name`      | _string_                      |
| `records`   | [_RecordType_](#recordtype)[] |
| `collapsed` | _boolean_                     |

**Returns:** _void_

Defined in: index.ts:106

---

### stage

▸ **stage**(`str`: _string_): [_Log_](#classeslogmd)

#### Parameters:

| Name  | Type     |
| :---- | :------- |
| `str` | _string_ |

**Returns:** [_Log_](#classeslogmd)

Defined in: index.ts:74

---

### warn

▸ **warn**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Defined in: index.ts:91

<a name="classesloggroupmd"></a>

[spy-log](#readmemd) / LogGroup

# Class: LogGroup

## Hierarchy

- [_Log_](#classeslogmd)

  ↳ **LogGroup**

## Constructors

### constructor

\+ **new LogGroup**(`name`: _string_, `parent`: [_Log_](#classeslogmd) \| [_LogGroup_](#classesloggroupmd), `collapsed?`: _boolean_): [_LogGroup_](#classesloggroupmd)

#### Parameters:

| Name        | Type                                                       | Default value |
| :---------- | :--------------------------------------------------------- | :------------ |
| `name`      | _string_                                                   | -             |
| `parent`    | [_Log_](#classeslogmd) \| [_LogGroup_](#classesloggroupmd) | -             |
| `collapsed` | _boolean_                                                  | false         |

**Returns:** [_LogGroup_](#classesloggroupmd)

Inherited from: [Log](#classeslogmd)

Defined in: index.ts:128

## Properties

### curStage

• `Protected` `Optional` **curStage**: _string_

Inherited from: [Log](#classeslogmd).[curStage](#curstage)

Defined in: index.ts:72

---

### namespace

• `Protected` **namespace**: _string_

Inherited from: [Log](#classeslogmd).[namespace](#namespace)

---

### console

▪ `Static` **console**: Console

Inherited from: [Log](#classeslogmd).[console](#console)

Defined in: index.ts:68

---

### getLogFn

▪ `Static` **getLogFn**: (`level`: [_LogLevel_](#enumsloglevelmd)) => (...`data`: _any_[]) => _void_

#### Type declaration:

▸ (`level`: [_LogLevel_](#enumsloglevelmd)): _function_

#### Parameters:

| Name    | Type                           |
| :------ | :----------------------------- |
| `level` | [_LogLevel_](#enumsloglevelmd) |

**Returns:** (...`data`: _any_[]) => _void_

Defined in: index.ts:62

Inherited from: [Log](#classeslogmd).[getLogFn](#getlogfn)

Defined in: index.ts:69

## Methods

### debug

▸ **debug**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Inherited from: [Log](#classeslogmd)

Defined in: index.ts:79

---

### end

▸ **end**(): _void_

**Returns:** _void_

Defined in: index.ts:150

---

### error

▸ **error**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Inherited from: [Log](#classeslogmd)

Defined in: index.ts:95

---

### group

▸ **group**(`name`: _string_): [_LogGroup_](#classesloggroupmd)

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `name` | _string_ |

**Returns:** [_LogGroup_](#classesloggroupmd)

Inherited from: [Log](#classeslogmd)

Defined in: index.ts:121

---

### info

▸ **info**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Inherited from: [Log](#classeslogmd)

Defined in: index.ts:87

---

### log

▸ **log**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Inherited from: [Log](#classeslogmd)

Defined in: index.ts:83

---

### print

▸ **print**(`message`: _any_[], `level`: [_LogLevel_](#enumsloglevelmd), `stage?`: _undefined_ \| _string_): _void_

#### Parameters:

| Name      | Type                           |
| :-------- | :----------------------------- |
| `message` | _any_[]                        |
| `level`   | [_LogLevel_](#enumsloglevelmd) |
| `stage`   | _undefined_ \| _string_        |

**Returns:** _void_

Overrides: [Log](#classeslogmd)

Defined in: index.ts:133

---

### printGroup

▸ **printGroup**(`name`: _string_, `records`: [_RecordType_](#recordtype)[], `collapsed`: _boolean_): _void_

#### Parameters:

| Name        | Type                          |
| :---------- | :---------------------------- |
| `name`      | _string_                      |
| `records`   | [_RecordType_](#recordtype)[] |
| `collapsed` | _boolean_                     |

**Returns:** _void_

Overrides: [Log](#classeslogmd)

Defined in: index.ts:142

---

### stage

▸ **stage**(`str`: _string_): [_LogGroup_](#classesloggroupmd)

#### Parameters:

| Name  | Type     |
| :---- | :------- |
| `str` | _string_ |

**Returns:** [_LogGroup_](#classesloggroupmd)

Inherited from: [Log](#classeslogmd)

Defined in: index.ts:74

---

### warn

▸ **warn**(...`args`: _any_[]): _void_

#### Parameters:

| Name      | Type    |
| :-------- | :------ |
| `...args` | _any_[] |

**Returns:** _void_

Inherited from: [Log](#classeslogmd)

Defined in: index.ts:91

# Enums

<a name="enumsloglevelmd"></a>

[spy-log](#readmemd) / LogLevel

# Enumeration: LogLevel

LogLevel.Log is identical to LogLevel.Info

**`see`** https://developers.google.com/web/tools/chrome-devtools/console/reference#level

## Enumeration members

### Error

• **Error**: = 4

Defined in: index.ts:11

---

### Info

• **Info**: = 2

Defined in: index.ts:9

---

### Log

• **Log**: = 1

Defined in: index.ts:8

---

### Verbose

• **Verbose**: = 0

Defined in: index.ts:7

---

### Warning

• **Warning**: = 3

Defined in: index.ts:10

# Interfaces

<a name="interfacesgrouprecordmd"></a>

[spy-log](#readmemd) / GroupRecord

# Interface: GroupRecord

## Properties

### collapsed

• **collapsed**: _boolean_

except the group is initially collapsed when it's logged to the Console

Defined in: index.ts:38

---

### name

• **name**: _string_

name of a log-group

#### Example

```typescript
> [namespace]name
····[stage]message in a group
```

Defined in: index.ts:34

---

### records

• **records**: [_RecordType_](#recordtype)[]

records in a log-group

Defined in: index.ts:42

<a name="interfaceslogrecordmd"></a>

[spy-log](#readmemd) / LogRecord

# Interface: LogRecord

## Properties

### level

• **level**: [_LogLevel_](#enumsloglevelmd)

Defined in: index.ts:23

---

### message

• **message**: _any_[]

messages to print

Defined in: index.ts:22

---

### stage

• `Optional` **stage**: _string_

stage of a log-record

#### Example

```typescript
[namespace][stage]message
```

Defined in: index.ts:20

---

### time

• **time**: Date

Defined in: index.ts:24
