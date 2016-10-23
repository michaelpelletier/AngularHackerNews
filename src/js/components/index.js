import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import ArticlePreview from './article-preview.component';
componentsModule.component('articlePreview', ArticlePreview);

import ArticleList from './article-list.component';
componentsModule.component('articleList', ArticleList);

import Comment from './comment.component';
componentsModule.component('comment', Comment);

import TimeSince from './time-since.component';
componentsModule.component('timeSince', TimeSince);

export default componentsModule;
