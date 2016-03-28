# Phase 5: Comments and Garbage Collection

## Rails
### Models
* Comment

### Controllers
* Api::CommentsController (create, destroy, index, show, update)

### Views
* comments/index.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
  - CommentIndexItem
* CommentShow
* CommentForm

### Stores
* Comment

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ApiActions.receiveSingleComment
* ApiActions.deleteComment
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.updateComment
* CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.updateComment
* ApiUtil.destroyComment

## Gems/Libraries
