# Changelog

## 0.1 Initial Release

* Basic [Zotero Web API](https://www.zotero.org/support/dev/web_api/v3/start)
   client built on [jquery.rest](https://github.com/jpillora/jquery.rest), with methods
   to search for user or group items, provide results for an autocomplete widget,
   and retrieve a single item by format and/or with included data.
* Annotator module adds a Zotero lookup button to the Meltdown toolbar,
   which launches a modal search input for selecting a citation.  Selecting a citation
   inserts an in-text reference and a full citation into the markdown editor.
*  Whenever an  annotation is saved, recognized Zotero items are pulled in TEI format and
   saved on the annotation as extra data.
* Customizable disabled message when required Zotero credentials are not available.
