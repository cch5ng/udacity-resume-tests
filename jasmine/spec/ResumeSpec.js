/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('bio object', function() {

        it('properties are defined', function() {
            expect(bio).toBeDefined();
            expect(bio.length).not.toBe(0);
            expect(bio.name).toBeDefined();
            expect(typeof bio.name).toBe("string");
            expect(bio.role).toBeDefined();
            expect(typeof bio.role).toBe("string");
            expect(bio.welcomeMessage).toBeDefined();
            expect(typeof bio.welcomeMessage).toBe("string");
            expect(bio.biopic).toBeDefined();
            expect(typeof bio.biopic).toBe("string");
            expect(bio.skills).toBeDefined();
            expect(typeof bio.skills).toBe("object");
            expect(bio.skills.length).toBeGreaterThan(0);
        });

        it('contact properties are defined', function() {
            expect(bio.contacts).toBeDefined();
            expect(typeof bio.contacts).toBe("object");
            expect(bio.contacts.mobile).toBeDefined();
            expect(typeof bio.contacts.mobile).toBe("string");
            expect(bio.contacts.email).toBeDefined();
            expect(typeof bio.contacts.email).toBe("string");
            expect(bio.contacts.github).toBeDefined();
            expect(typeof bio.contacts.github).toBe("string");
            expect(bio.contacts.location).toBeDefined();
            expect(typeof bio.contacts.location).toBe("string");
        });

    });


    describe('education object', function() {

        it('properties are defined', function() {
            expect(education).toBeDefined();
            expect(education.length).not.toBe(0);
        });

        it('schools properties are defined', function() {
            expect(education.schools).toBeDefined();
            expect(typeof education.schools).toBe("object");

            education.schools.forEach(function(school) {
                expect(school.name).toBeDefined();
                expect(typeof school.name).toBe("string");
                expect(school.location).toBeDefined();
                expect(typeof school.location).toBe("string");
                expect(school.degree).toBeDefined();
                expect(typeof school.degree).toBe("string");
                expect(school.majors).toBeDefined();
                expect(typeof school.majors).toBe("object");
                //expect(school.majors.length).toBeGreaterThan(0);
                expect(school.dates).toBeDefined();
                expect(typeof school.dates).toBe("string");
                // expect(school.url).toBeDefined();
                // expect(typeof school.url).toBe("string");
            })
        });

        it('online courses properties are defined', function() {
            expect(education.onlineCourses).toBeDefined();
            expect(typeof education.onlineCourses).toBe("object");

            education.onlineCourses.forEach(function(course) {
                expect(course.title).toBeDefined();
                expect(typeof course.title).toBe("string");
                expect(course.school).toBeDefined();
                expect(typeof course.school).toBe("string");
                expect(course.dates).toBeDefined();
                expect(typeof course.dates).toBe("string");
                expect(course.url).toBeDefined();
                expect(typeof course.url).toBe("string");
            })
        });

    });

    // TODO suite for work

    // TODO suite for projects

}());