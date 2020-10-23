import mysql.connector
from mysql.connector import errorcode
from db_insert import _streamSSE

def connect_to_db():
    '''
    function to connect to the db
    :return: returns true, cnx if successful, false if not
    '''
    try:
        cnx = mysql.connector.connect(user='root', password='ppp',
                                      host='127.0.0.1',
                                      database='db_grad_cs_1917', auth_plugin='mysql_native_password')
        cursor = cnx.cursor(dictionary=True)
        try:
            cnx.commit()
            cursor.close()
            return True, cnx

        except mysql.connector.IntegrityError:
            cursor.close()
            return False

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("User authorization error")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database doesn't exist")
        else:
            print(err)
        return False
    else:
        return False


def disconnect_db(cnx):
    cursor = cnx.cursor
    if cnx.is_connected():
        cursor.close()
        print("Connection closed")


if __name__ == '__main__':
    connection, cnx = connect_to_db()
    if connection:
        _streamSSE('http://127.0.0.1:8080/streamTest/sse', cnx)

    disconnect_db(cnx)
