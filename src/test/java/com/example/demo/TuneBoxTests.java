package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TuneBoxTests {
	private Album album;
	private Review review;
	private ReviewService reviewServicer;
	private User user;
	private UserService userServicer;

	@Before
	public void setUp(){
		this.album = new Album("Test Album", "Tester", 2000, "Tested", "TEST");
		this.review = new Review(1, 2, 3, "Good", "TEST");
		this.user = new User("TestUser", "TestPass", "TestEmail", "TEST");
	}

	@After
	public void tearDown(){
	}

	@Test
	void albumTitleTest() {
		String title = this.album.getTitle();
		assertTrue("Album titles are not equal", title.equals("Test Album"));
	}

	@Test
	void albumCodeSetterTest(){
		this.album.setAlbumCode("New");
		assertEquals("New", this.album.getAlbumCode());
	}

	@Test
	void albumCodeTest(){
		assertFalse(this.album.getAlbumCode().equals("TEST"));
	}

	@Test
	void findReviewByIDTest(){
		assertTrue(reviewServicer.findReviewByID(this.review.id).length > 20);
	}

	@Test
	void reviewProfileIDTest(){
		long id = this.review.getProfileID();
		assertEquals(1, id);
	}

	@Test
	void getReviewsTest(){
		List<Review> myList = new List<Review>();
		myList.add(this.review);

		reviewServicer.addReview(this.review);

		assertEquals(myList, reviewServicer.findAllReviews());
	}

	@Test
	void userCreationTest(){
		User tester = new User("TestUser", "TestPass", "TestEmail", "TEST");
		assertEquals(tester, this.user);
	}

	@Test
	void userCreationBackendTest(){
		userServicer.addUser(this.user);
		assertTrue(userServicer.findAllUsers().length() > 0);
	}

}
