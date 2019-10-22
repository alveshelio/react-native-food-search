"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var react_navigation_stack_1 = require("react-navigation-stack");
var Search_1 = __importDefault(require("./src/screens/Search"));
var navigator = react_navigation_stack_1.createStackNavigator({
    Search: Search_1.default,
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }
});
exports.default = react_navigation_1.createAppContainer(navigator);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2hhbHZlcy9EZXYvUmVhY3ROYXRpdmUvQ291cnNlcy9Db21wbGV0ZVJOMjAxOS9mb29kL0FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsaUVBQTZEO0FBQzdELGdFQUF5QztBQUV6QyxJQUFNLFNBQVMsR0FBRyw2Q0FBb0IsQ0FBQztJQUNyQyxNQUFNLGtCQUFBO0NBQ1AsRUFBRTtJQUNELGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsd0JBQXdCLEVBQUU7UUFDeEIsS0FBSyxFQUFFLGlCQUFpQjtLQUN6QjtDQUNGLENBQUMsQ0FBQTtBQUVGLGtCQUFlLHFDQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWx2ZXMvRGV2L1JlYWN0TmF0aXZlL0NvdXJzZXMvQ29tcGxldGVSTjIwMTkvZm9vZC9BcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LW5hdmlnYXRpb24nXG5pbXBvcnQgeyBjcmVhdGVTdGFja05hdmlnYXRvciB9IGZyb20gJ3JlYWN0LW5hdmlnYXRpb24tc3RhY2snXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc3JjL3NjcmVlbnMvU2VhcmNoJ1xuXG5jb25zdCBuYXZpZ2F0b3IgPSBjcmVhdGVTdGFja05hdmlnYXRvcih7XG4gIFNlYXJjaCxcbn0sIHtcbiAgaW5pdGlhbFJvdXRlTmFtZTogJ1NlYXJjaCcsXG4gIGRlZmF1bHROYXZpZ2F0aW9uT3B0aW9uczoge1xuICAgIHRpdGxlOiAnQnVzaW5lc3MgU2VhcmNoJ1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcHBDb250YWluZXIobmF2aWdhdG9yKSJdLCJ2ZXJzaW9uIjozfQ==