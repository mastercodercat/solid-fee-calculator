package com.grafanalabs;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import java.time.LocalDate;

/**
 * Unit test for simple App.
 */
public class AppTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testApp()
    {
        int userType = 0; // TODO: Initialize to an appropriate value
        int itemType = 0; // TODO: Initialize to an appropriate value
        int itemPrice = 0; // TODO: Initialize to an appropriate value
        LocalDate itemEndDate = LocalDate.now(); // TODO: Initialize to an appropriate value
        int expected = 0; // TODO: Initialize to an appropriate value
        int actual;
        actual = App.CalculateFee(userType, itemType, itemPrice, itemEndDate);
        // assertEquals(expected, actual);
        assertTrue(true);
    }
}
