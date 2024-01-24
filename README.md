# [GeegPayFrontendChallenge]

## Table Of Content

- [Installation](#installation)
  - [Clone](#clone)
  - [Install Dependencies](#dependencies)
  - [Run locally](#run)
- [File Structure](#file-structure)
  - [Components](#components)
    - [Shared](#shared)
  - [Design System](#design-system)
  - [Utils](#utils)

## installation

### Clone

```bash
# Add git
git clone https://github.com/Jamesalehandro/geegpayfrontendchallenge.git
```

## package manager

we are using pnpm package manager to avoid conflicts with the lock file

### Dependencies

```bash
cd geegpayfrontendchallenge
pnpm install
```

### Run

```bash
pnpm dev or yarn dev or npm run dev
```

## Components

For components that aren't shared (e.g page specific), they reside in `/src/components/page` folder e.g `src/components/home.

## Design System

The design system utilized in this project is Chakra UI.
To begin, please access the official website at https://chakra-ui.com/.
For a comprehensive introduction to the primary styles employed within Chakra, kindly refer to the following documentation: https://chakra-ui.com/docs/styled-system/text-and-layer-styles#layer-styles.

### Shared

Components that are used widely around the application is stored in `/src/components/shared`

### Utils

Functions that are used to format or handle small validations within the app is stored here.
It also contains the `routes` folder where all routes are defined
