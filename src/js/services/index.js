import angular from 'angular';

let servicesModule = angular.module('app.services', []);

import ArticlesService from './articles.service';
servicesModule.service('Articles', ArticlesService);

import CommentsService from './comments.service';
servicesModule.service('Comments', CommentsService);

export default servicesModule;
