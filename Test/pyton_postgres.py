import psycopg2
import psycopg2.extras

hostname = 'localhost'
database = 'demo'
username = 'postgres'
pwd = 'boss1ng'
post_id = '5432'

# No more of the cur variable in WITH clause.
#cur = None
conn = None

try:
    # Connection String
    """

    conn = psycopg2.connect(
        host = hostname,
        dbname = database,
        user = username,
        password = pwd,
        port = post_id
    )

    #cur = conn.cursor()
    cur = conn.cursor(cursor_factory = psycopg2.extras.DictCursor)

    """

    # CONTEXT MANAGER
    with psycopg2.connect(
        host = hostname,
        dbname = database,
        user = username,
        password = pwd,
        port = post_id) as conn:

        with conn.cursor(cursor_factory = psycopg2.extras.DictCursor) as cur:

            cur.execute('DROP TABLE IF EXISTS employee')

            create_script = ''' CREATE TABLE IF NOT EXISTS employee (
                                    id          int PRIMARY KEY,
                                    name        varchar(40) NOT NULL,
                                    salary      int,
                                    dept_id     varchar(30))
                            '''
            cur.execute(create_script)

            insert_script = ''' INSERT INTO employee (id, name, salary, dept_id)
                                    VALUES (%s, %s, %s, %s)
                            '''
            insert_value = (1, 'James', 12000, 'D1')
            
            """
            To pass more than one record, you can put it inside a List.

                insert_values = [(1, 'James', 12000, 'D1'), (2, 'John', 15000, 'D1'), (3, 'Xavier', 20000, 'D2')]

                for record in insert_values:
                    cur.execute(insert_script, record)
            
            """
            cur.execute(insert_script, insert_value)

            update_script = ' UPDATE employee SET salary = salary + (salary * 0.5)'
            cur.execute(update_script)

            delete_script = 'DELETE FROM employee WHERE name = %s'
            delete_record = ('James',)  # comma after the value is required
            cur.execute(delete_script, delete_record)

            cur.execute('SELECT * FROM employee')
            # Print the record in every line
            for record in cur.fetchall():
                print(record)
            
            """
            Print the records in a single continuous line.
                print(record)

            Print selected value/s from the rcords.
                print(record[1], record[2])

            Print the record in the form of data dictionary / column name.
                print(record['name'], record['salary'])

            """

            # Perform the database-related actions.
            # No need to perform commit() in WITH clause.
            # conn.commit()

except Exception as error:
    print(error)

finally:
    # Disconnect
    # No need to close the cur variable in WITH clause.
    #if cur is not None:
    #    cur.close()
    if conn is not None:
        conn.close()