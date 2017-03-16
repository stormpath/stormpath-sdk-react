# Stormpath is Joining Okta

We are incredibly excited to announce that [Stormpath is joining forces with Okta](https://stormpath.com/blog/stormpaths-new-path?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement). Please visit the [Migration FAQ][] for a detailed look at what this means for Stormpath users.

We're available to answer all questions at [support@stormpath.com](mailto:support@stormpath.com).

## What does this mean for developers who are using this library?

If you're already using this library, here's what you need to know:

- We will be providing a data migration tool, allowing you to move your data
  from your Stormpath tenant to a new Okta organization.
- We will be patching some of our framework integrations to work with Okta.  Please
  see the [Migration FAQ][] for a list of which frameworks we will support.
- This library will continue to work with a patched framework integration, if
  the feature you are using will be supported.  Again please see the [Migration FAQ]
  for the feature support matrix.
- If you are using this library with the Stormpath Client API, you will need to
  switch over to one of our server-side framework integrations because the Stormpath
  Client API will be shut down.

## README

If you are actively using this library, you can find the readme in [OLD-README.md](OLD-README.md).
It is not possible to register for new Stormpath tenants at this time, so you must
already have a Stormpath tenant if you wish to use this library during the migration
period.
## License

Apache 2.0, see [LICENSE](LICENSE).

[Migration FAQ]: https://stormpath.com/oktaplusstormpath?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement
