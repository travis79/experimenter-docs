---
id: fml-front-end-format
title: Feature Manifest Language Front-end Format
slug: /fml-front-end-format
---

- Status: new
- Deciders: @travis79, @jhugman, @teshaq, @jkerim
- Date: 2021-10-26

## Context and problem statement

In order to allow product teams to define experimentable application features, there needs to be a manifest file which defines these in a way that is understandable to the Nimbus ecosystem.  The feature manifest should define data types used in the application code to configure features. It should also be able to define a complete default configuration for each application feature.

## Decision drivers

- It should not be onerous to write and maintain for a junior engineer or intern
- A single feature should be readable/guessable by a product owner or designer
- Once written, it should be easy to navigate and read, even if there are many features
- It should map easily to Kotlin, Swift (and Rust)
- No algebraic types
- No inheritance / polymorphism
- Defaults should be specifiable at the property level
- Defaults should be specifiable at the feature level

## Decision outcome

The front-end format for the Nimbus manifests will follow the [YAML](https://yaml.org/) format.

Pros:

- More concise, and less likely to have errors due to formatting such as missing a bracket or comma
- Support for comments within the document
- A schema can be defined using JSONSchema for the purposes of validation
- YAML is a superset of JSON, so any existing JSON should be able to be parsed by the YAML parser
- JSON can be embedded within YAML
- Support for multiple documents within one file, so each feature could be a separate "document", simplifying and flattening the schema.

Cons:

- Yet another data representation language to deal with
- Readability over other formats is marginal

## Other considered options

### Option 1 - JSON

JSON is still technically supported since YAML is a superset of JSON.

### Option 2 - JavaScript/TypeScript

JavaScript and TypeScript parsers are harder to find and less supported, and the full-blown javascript engines seem like overkill.

## Additional considerations

- It should be easy to copy a winning branch of an experiment or rollout back into the feature manifest
- Reference to bundled text and icons should allow for multiple choice in the manifest
- An app may consist of multiple projects
- The format/schema/grammar of the feature manifest language should be documented in the nimbus-shared repo
